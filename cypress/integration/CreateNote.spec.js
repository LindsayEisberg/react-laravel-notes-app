describe('Create Note', () => {
	beforeEach(() => {

		cy.visit('/')
	})
	it('Clicks link "Create New Note", fills out form and submits new note', () => {
		cy.contains('Create New Note').click()
		// cy.url().should('include', '/#/create')

		const input = "This is a test title"
		const textarea = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi pariatur corporis libero velit minima veritatis quos. "
		cy.get('#title')
	  		.type(input).should('have.value', input)
		cy.get('#copy')
		  .type(textarea).should('have.value', textarea)
		cy.get('form').submit()
	})

})

