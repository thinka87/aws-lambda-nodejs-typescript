import * as Helpers from "../utils/Helpers";
class Prodcuts {
  
  
  async downloadProdcutsData(config: any)  {
  
    try {
     
      const products = await Helpers.getJsonByURL(config.api.base_url+config.api.get_prodcuts_end_point);
      const product_images = await Helpers.getJsonByURL(config.api.base_url+config.api.get_prodcut_images_end_point);
      const merged_products_data =await Helpers.mergeProductsData(products ,product_images,config.api.products_search_key_name);
      await Helpers.uploadToS3(config.api.S3_BUCKET_NAME ,config.api.S3_KEY , JSON.stringify(merged_products_data),'text/plain');
      return merged_products_data;
    } catch (e) {
      console.log(e);
    }
  }

  async getProdcutsData(sku: string ,config: any) {
   
    try {
      
      let product_list= {};
      const products = await Helpers.getS3File(config.api.S3_BUCKET_NAME ,config.api.S3_KEY);
      if(sku){
        const product =await Helpers.getProductBySku(products ,config.api.products_search_key_name ,sku);
        product_list["products"]=[product];     
      }else{
        product_list["products"]=products.products;
      }      
      return product_list;
    } catch (e) {
      
      console.log(e);
     
    }
  }
}

export default new Prodcuts();
