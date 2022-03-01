import fetch from 'node-fetch';
import AWS from 'aws-sdk';
const s3 = new AWS.S3();
//Using this function get json contents from URL
export const getJsonByURL = async (URL: string) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
//Using this function merge products and product images
export const mergeProductsData = async (products: any, product_images: any, searchField: string) => {

    for (let i = 0; i < products.products.length; i++) {
        if (products.products[i][searchField]) {
            let image_obj = product_images.images[products.products[i][searchField]];
            products.products[i]["image_list"] = image_obj;
        }
    }

    return products;
};
//Using this function search prdocunts in json object by sku
export const getProductBySku = async (products: any, searchField: string, sku: string) => {
    for (let i = 0; i < products.products.length; i++) {
        if (products.products[i][searchField] == sku) {
            return products.products[i];
        }
    }
};
//Using this function uplaod files into S3
export const uploadToS3 = async (bucket: string, key: string, body: string, content_type: string) => {

    const params = {
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: content_type,
    };

    const s3Response = await s3.upload(params).promise();
    return s3Response;
};
//Using this function get files from S3
export const getS3File = async (bucket: string, key: string) => {

    const params = {
        Bucket: bucket,
        Key: key,
    };
    const data = await s3.getObject(params).promise();
    return JSON.parse(data.Body.toString('utf-8'));
};

