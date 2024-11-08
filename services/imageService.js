import { decode } from 'base64-arraybuffer';
import * as FileSystem from 'expo-file-system';
import { supabase } from '../lib/supabase';

export const getUserImageSrc = imagePath =>{
    if (imagePath) {
        return getSupabaseFileUrl(imagePath);
    }else{
        return require('../assets/images/defaultUser.png')
    }
}

export const getSupabaseFileUrl=filePath =>{
    if (filePath) {
        return{uri: null/*burada supabase yüklenen fotoğrafın url i oluyor null değil uri da uploads/${filePath} olmalı başıda eğit tırnak içine ${supabaseUrl}/storage*/}
    }
    return null;
}

export const uploadFile = async (folderName, fileUri, isImage=true)=>{
    try {
        let fileName = getFilePath(folderName, isImage);
        const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64
        });
        let imageData = decode(fileBase64); // array buffer
        let {data, error} = await supabase
        .storage
        .from('uploads')
        .upload(fileName, imageData, {
            cacheControl: '3600',
            upsert: false,
            contentType: isImage? 'image/*': 'video/*'
        });
        if (error) {
            console.log('file upload error: ', error);
        return {success: false, msg: 'Could not upload media'};
        }

        return{success: true, data: data.path}
    } catch (error) {
        console.log('file upload error: ', error);
        return {success: false, msg: 'Could not upload media'};
    }
}

export const getFilePath = (folderName, isImage)=>{
    return `/${folderName}/${(new Date()).getTime()}${isImage? '.png': '.mp4'}}`;
}