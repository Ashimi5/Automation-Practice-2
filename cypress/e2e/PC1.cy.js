describe('My first Test',()=>{

    it('Verify the URL of a site',()=>{


        cy.visit("https://www.booking.com/index.en-gb.html?aid=2311236;label=en-np-booking-desktop-kuwihQyiAfwwmXhdf4kR6gS652796017620:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-334108349:lp1011034:li:dec:dm;ws=&gclid=Cj0KCQjwwae1BhC_ARIsAK4Jfrw7WOkdZomKS2vV7WATSLu2eZCXdz3ipArOgiDBDPyg7iVAnPGg1JwaAt7_EALw_wcB");
        cy.get(".footer-top-button").scrollIntoView({duration:2000});
   
    })




})