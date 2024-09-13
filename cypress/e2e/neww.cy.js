describe("User Journey", () => {
     beforeEach(()=>{
        cy.visit("https://sauravsarkar-codersarcade.github.io/ca_automationpractice.com/")
     })

    it("Enters Name and Last name",() => {
        //cy.visit("https://sauravsarkar-codersarcade.github.io/ca_automationpractice.com/")
        cy.get("#fname").type('Sanchit')
        cy.get("#lname").type('Verma')


    })

    it("Enters Gender",()=>{
        cy.get('[type="radio"]').first().check()
    })
        

})
