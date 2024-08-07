import 'cypress-file-upload';

describe("File Uploads",(()=>{

    it('Single File Upload',()=>{

            cy.visit("http://the-internet.herokuapp.com/upload");
            cy.get("#file-upload").attachFile('Rest1.jpg');
            cy.get("#file-submit").click();
            cy.wait(5000);
            cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })

    it('File upload rename',()=>{

        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:'Rest1.jpg',fileName:'Best1.jpg'});
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })

    
    it('Drag and drop',()=>{

        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload")
        .attachFile("Rest1.jpg",{subjectType:'drag-n-drop'});

        cy.wait(5000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("Rest1.jpg");

    })

     
    it('Multiple file upload',()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        
        cy.get('#filesToUpload').attachFile(["Rest1.jpg","Chest1.jpg"]);

        cy.wait(5000);

        //cy.get(':nth-child(1) > strong').should('contain.text','Files you selected:')
    })


    it.only('ShadowDOM',()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("Rest1.jpg");

        cy.wait(5000);

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('Rest1.jpg');

    })





}))