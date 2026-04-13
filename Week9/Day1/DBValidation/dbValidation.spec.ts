import { test, expect } from '@playwright/test';
import { executeQuery } from './dbutils';

test('Validate Employee in DB', async ({ page }) => {

    // UI Steps
    await page.goto('http://localhost/orangehrm-5.7/web/index.php/auth/login');

    await page.fill('[name="username"]', 'admin');
    await page.fill('[name="password"]', 'OR03mar@26');
    await page.click('[type="submit"]');

    await page.click('text=PIM');
    await page.click('text=Add Employee');

    await page.fill('[name="firstName"]', 'Ravindran');
    await page.fill('[name="lastName"]', 'R Qeagle');

    const empId = await page.inputValue(`(//label[text()='Employee Id']//following::input)[1]`); // Emp Id : 11

    await page.click('[type="submit"]');

    console.log('UI Employee ID:', empId);

    // DB Validation using utility
    const rows: any = await executeQuery( // User defined named function is called to make a DB call for validation
        'SELECT employee_id FROM hs_hr_employee WHERE employee_id = ?', // SELECT data
        [empId]
    );

    console.log('DB Result:', rows);

    expect(rows.length).toBeGreaterThan(0);

});