

export default {  
  /**
   * DW products API configs
   */
  

  api: {
    base_url: "https://assignment.dwbt.tech", //DW api base URL
    get_prodcuts_end_point: "/products", //resouce path
    get_prodcut_images_end_point: "/images", //resouce path 
    products_search_key_name : "sku", //key name for seach prodcuts in json file
    S3_BUCKET_NAME :process.env.S3_BUCKET_NAME ,
    S3_KEY : "products.json", //s3 file name
  },
};
