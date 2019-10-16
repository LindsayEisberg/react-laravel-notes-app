describe('Notes App', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	// it('clicks Create Note Link', () => {
	// 	cy.contains('Create New Note').click()
	// })
	it('Loads notes on page load', () => {
		cy.server()
		cy.route('GET', '/api/notes', 'fixture:notes')
		cy.visit('/')

		cy.get('.all-notes__item')
		  .should('have.length', 4)
	})


})