describe('Testpath',()=>{

    it('XPATH TEST',()=>{

            cy.visit("https://demo.nopcommerce.com/");

            cy.xpath("//div[@class='page-body']//div[1]//div[1]//div[2]//div[3]//div[2]//button[1]").click();


    })



})