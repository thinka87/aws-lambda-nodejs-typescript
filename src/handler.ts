import ProductsService from "./services/ProdcutsService";
import Responses from "./utils/APIResponses";
import config from "./config";

// Using this handler load prdocuts data from dw API
export const loadProdcuts = async (): Promise<any> => {
  const data = await ProductsService.downloadProdcutsData(config);
  return Responses._200(data);
};

// Using this handler get merged prdocuts data from S3
export const getProdcuts = async (event): Promise<any> => {

  var sku ='' ;
  if (event?.pathParameters?.sku !=null ) {
    sku =event.pathParameters.sku;
  }
  const data = await ProductsService.getProdcutsData(sku,config);
  return Responses._200(data);
};
