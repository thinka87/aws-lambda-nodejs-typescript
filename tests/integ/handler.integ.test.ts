import supertest from "supertest"
jest.setTimeout(60000)

describe('prodcuts api', () => {
    const api = supertest('https://50o33dh007.execute-api.us-east-1.amazonaws.com/dev/')
    let sku_id="";
  
    it('returns a 200 after download all prodcuts data', (done)=>{
       api.get('loadProdcuts')
        .expect(200)
        .expect('Content-Type', 'application/json')
        .then(response => {
          expect(response.body.products[0]["sku"]).toBeDefined();
          sku_id =response.body.products[0]["sku"];
          done();
        })
        .catch(err => done(err))
    
    })
  
    it('returns all products data with 200', async () => {
      const response =await  api.get('getProdcuts')
        .expect(200)
        .expect('Content-Type', 'application/json')
        expect(response.body.products[0]["sku"]).toBeDefined();
  
    })
    
    it('returns products data by sku with 200', async () => {
      const response =await  api.get('getProdcuts/'+sku_id)
        .expect(200)
        .expect('Content-Type', 'application/json')
        expect(response.body.products[0]["sku"]).toEqual("DW00100001");
            
    })
  
    it('returns products data by sku with 200', async () => {
      const response =await  api.get('getProdcuts/xxxxxx')
        .expect(200)
        .expect('Content-Type', 'application/json')
        expect(response.body.products).toEqual([null]);
  
    })
  
  })