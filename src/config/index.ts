

export default {  
  /**
   * DW products API configs
   */
  

  api: {
    base_url: "https://assignment.dwbt.tech",
    get_prodcuts_end_point: "/products",
    get_prodcut_images_end_point: "/images",
    products_search_key_name : "sku",
    S3_BUCKET_NAME :process.env.S3_BUCKET_NAME ,
    S3_KEY : "products.json",
  },
};
