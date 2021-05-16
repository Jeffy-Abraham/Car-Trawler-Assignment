//TEST the homepage

describe("The carlist", () => {
  before(() => {
    cy.visit("https://master.d1v85iiwii35dx.amplifyapp.com/");
  });

  it("takes user to the correct page", () => {
    var a = cy.get(".car-list-child > div").should("have.length", 10);
  });
});

//TEST the dropdown

describe("The dropdownbutton", () => {
  it("Price dropdown toggles correctly", () => {
    cy.get(".dropdown-button").click({ multiple: true });
    cy.get(".show-content");
  });
});

//TEST the checkboxes

describe("The correct price is shown for the corresponding checkbox value also check if checkbox works fine", () => {
  it("Show cars less than 700 euro", () => {
    cy.get(".dropdown-button").eq(1).click();
    cy.get(".show-content > div > .container > .checkmark").eq(0).click();
    cy.get(
      ".car-list-child > .car-cotainer-flex >.car-container-flex-main >.footer-container>.price-tag"
    ).each((el) => {
      expect(parseFloat(el.text())).to.be.lessThan(800);
    });
  });
  it("Show cars greater than 800 euro", () => {
    cy.get(".dropdown-button").eq(1).click();
    cy.get(".show-content > div > .container > .checkmark").eq(1).click();
    cy.get(
      ".car-list-child > .car-cotainer-flex >.car-container-flex-main >.footer-container>.price-tag"
    ).each((el) => {
      expect(parseFloat(el.text())).to.be.greaterThan(800);
    });
  });
  it("Show cars greater than 900 euro", () => {
    cy.get(".dropdown-button").eq(1).click();
    cy.get(".show-content > div > .container > .checkmark").eq(2).click();
    cy.get(
      ".car-list-child > .car-cotainer-flex >.car-container-flex-main >.footer-container>.price-tag"
    ).each((el) => {
      expect(parseFloat(el.text())).to.be.greaterThan(900);
    });
  });
});
//TEST if clicking on the card takes the user to the correct link

describe("Correct routing is followed", () => {
  it("renders the page with the id of the element which was clicked", () => {
    var x = cy.get(".car-list-child > div").eq(1);
    x.each((el) => {
      var id = el[0].id;
      cy.get(".car-list-child > div").eq(1).click();
      cy.url().should(
        "eq",
        `https://master.d1v85iiwii35dx.amplifyapp.com/cars/${id}`
      );
    });
  });
});
