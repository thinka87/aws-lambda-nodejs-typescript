import { APIGatewayProxyEvent } from "aws-lambda";
import { loadProdcuts,getProdcuts } from "../../src/handler";

jest.setTimeout(60000)
jest.mock('aws-sdk', () => {
    const uploadObjectOutputMock = {
      promise: jest.fn(),
    };
    const uploadObjectMock = jest.fn(() => uploadObjectOutputMock);
  
    const getObjectOutputMock = {
      promise: () => Promise.resolve({
        Body: Buffer.from(require("fs").readFileSync("./products.json"))
      }),
    };
    const getObjectMock = jest.fn(() => getObjectOutputMock);
  
    const mS3 = {
      upload: uploadObjectMock,
      getObject: getObjectMock,
    };
    return { S3: jest.fn(() => mS3) };
});


describe('Unit test for loadProdcuts handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {} as any
        const result = await loadProdcuts()
        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe('string');
        expect(result.headers['Content-Type']).toBe('application/json');
        
    });
});

describe('Unit test for getProdcuts handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {} as any
        const result = await getProdcuts(event)
        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe('string');
        expect(result.headers['Content-Type']).toBe('application/json');     
    });
});

describe('Unit test for getProdcuts handler with sku', function () {
  it('verifies successful response', async () => {
      const event: APIGatewayProxyEvent = {pathParameters: {
        sku: "DW00100001"
      }} as any
      const result = await getProdcuts(event)
      expect(result.statusCode).toBe(200);
      expect(typeof result.body).toBe('string');
      expect(result.headers['Content-Type']).toBe('application/json');
            
  });
});

describe('Unit test for getProdcuts handler with incorrest sku', function () {
  it('verifies successful response', async () => {
      const event: APIGatewayProxyEvent = {pathParameters: {
        sku: "XXXXXX"
      }} as any
      const result = await getProdcuts(event)
      expect(result.statusCode).toBe(200);
      expect(typeof result.body).toBe('string');
      expect(result.headers['Content-Type']).toBe('application/json');
            
  });
});