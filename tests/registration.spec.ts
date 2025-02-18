import {test, expect, Page} from '@playwright/test';
import { RegistrationPage } from '../pages/registration';


const URL = 'http://fade-qa-test.s3-website-eu-west-1.amazonaws.com/';
let registrationPage: RegistrationPage;

test.beforeEach(async ({page}) => {
    await page.goto (URL)
    registrationPage = new RegistrationPage(page);
});

test.describe('Registraion page tests', ()=> {

    //fill and submit form
    test('Submit valid user all fields & verify table', async() => {
        await registrationPage.assertPageTitle();
        await registrationPage.fillName('Michael Oloyede');
        await registrationPage.fillEmail('oloyedemike@gmail.com')
        await registrationPage.selectCountry('Algeria'); 
        await registrationPage.registerUser();
        
        //verify table
       const name = await registrationPage.assertNameTable();
       const email = await registrationPage.assertEmailTable();
       const country = await registrationPage.assertCountryTable();
        expect(name).toBe('Michael Oloyede');
        expect(email).toBe('oloyedemike@gmail.com')
        expect(country).toBe('Algeria'); 

    });

    //Test misising name
    test('Required name field validtion', async() => {
        await registrationPage.selectCountry('Nigeria')
        await registrationPage.registerUser();
        const error = await registrationPage.assertNameError();
        expect(error).toBe('Name is required.')

    });

     //Test misising country
     test('Required country field validtion', async() => {
        await registrationPage.fillName('Mike Qa');
        await registrationPage.assertFormValues('Mike Qa');
        await registrationPage.registerUser();
        const error = await registrationPage.assertCountryError();
        expect(error).toBe('Country is required.')

    });

     //Test missing email
     test('Entry without email', async() => {
        await registrationPage.fillName('Gul');
        await registrationPage.selectCountry('Benin'); 
        await registrationPage.registerUser();
        
        //verify table
       const name = await registrationPage.assertNameTable();
       const email = await registrationPage.assertEmailTable();
       const country = await registrationPage.assertCountryTable();
        expect(name).toBe('Gul');
        expect(email).toBe('');
        expect(country).toBe('Benin'); 

     });

     //Test missing email
     test('Data session saved', async() => {
        await registrationPage.fillName('Mark');
        await registrationPage.fillEmail('mark@hireme.com')
        await registrationPage.selectCountry('Morocco'); 
        await registrationPage.registerUser();
        await registrationPage.reload();
        
        //verify table
       const name = await registrationPage.assertNameTable();
       const email = await registrationPage.assertEmailTable();
       const country = await registrationPage.assertCountryTable();
        expect(name).toBe('Mark');
        expect(email).toBe('mark@hireme.com');
        expect(country).toBe('Morocco'); 

     });



});