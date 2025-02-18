import { type Locator, type Page, expect } from "@playwright/test";

export class RegistrationPage {
//variables
readonly page: Page;
readonly pageTitle: Locator;
readonly emailField: Locator;
readonly nameField: Locator;
readonly countryOption: Locator;
readonly registerButton: Locator;
readonly tableRow: Locator;
readonly nameTable: Locator;
readonly emailTable: Locator;
readonly countryTable: Locator;
readonly nameError: Locator;
readonly countryError: Locator;

//constructors
constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', {name: 'Registration Form'});
    this.nameField = page.getByLabel('Name');
    this.emailField = page.getByLabel('email');
    this.countryOption = page.getByRole('combobox');
    this.registerButton = page.getByRole('button', {name: 'Register'});
    this.tableRow = page.locator('.MuiTableBody-root tr').first();
    this.nameTable = this.tableRow.locator('td.name');
    this.emailTable = this.tableRow.locator('td.email');
    this.countryTable = this.tableRow.locator('td.country');
    this.nameError = page.locator('#name-helper-text');
    this.countryError = page.locator('#country-helper-text');

}


//methods
async assertPageTitle() {
        await expect(this.pageTitle).toContainText('Registration Form');
    }

async fillName(name: string) {
        await this.nameField.fill(name);
    }

async fillEmail(email: string) {
        await this.emailField.fill(email);
    }

async selectCountry(country: string){
    await this.countryOption.click();
    await this.page.getByRole('option', { name: country }).click();

     }

async registerUser() {
    await this.registerButton.click();
}

async assertNameTable(): Promise<string> {
    return (await this.nameTable.textContent()) || '';
}

async assertEmailTable(): Promise<string> {
    return (await this.emailTable.textContent()) || '';
}

async assertCountryTable(): Promise<string> {
    return (await this.countryTable.textContent()) || '';
}

async assertNameError(): Promise<string> {
    await this.nameError.waitFor({
        state: 'visible',
        timeout: 5000});
    return (await this.nameError.textContent()) || '';
}

async assertCountryError(): Promise<string> {
    await this.countryError.waitFor({
        state: 'visible',
        timeout: 5000});
    return (await this.countryError.textContent()) || '';
}

async assertFormValues(expectedName: string) {
        await expect(this.nameField).toHaveValue(expectedName);
    }

    async reload(): Promise<void> {
        await this.page.reload();
        // Wait for the page to be fully loaded
        await this.page.waitForLoadState('networkidle');
    }
 

}

export default RegistrationPage;