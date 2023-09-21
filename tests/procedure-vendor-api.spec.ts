
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import {  } from 'graphql-tag';
import { generateRandomName, sendGraphQLQuery } from './graphqlUtils';

dotenv.config();

test('UserProcedureVendors Query Test', async ({ page }) => {
  const query = `
    query UserProcedureVendors($input: UserListProcedureVendorInput) {
      items: userProcedureVendors(input: $input) {
id
createdAt
updatedAt
name
procedureId
contractId
vendorId
estimate
fundingApproved
procedure {
  id
  name
}
contract {
  id
  name
}
vendor {
  id
  name
}





caseAccounts {
    id
    name
  }

documents {
    id
    name
  }
      }
      count: userCountProcedureVendors(input: $input) {
        total
      }
    }
  `;

  // Send a GraphQL query to the endpoint
  const graphqlUrl = process.env.GRAPHQL_URL || '';
  const url = new URL(graphqlUrl);
  const response = await sendGraphQLQuery(url.href, query);

  // Verify the response data
  const { data, errors } = response;
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();

  const { items, count } = data;
  expect(items).toBeDefined();
  expect(count).toBeDefined();
});

test('UserCountProcedureVendors Query Test', async ({ page }) => {
  const query = `
    query UserCountProcedureVendors($input: UserListProcedureVendorInput) {
      count: userCountProcedureVendors(input: $input) {
        total
      }
    }
  `;

  // Send a GraphQL query to the endpoint
  const graphqlUrl = process.env.GRAPHQL_URL || '';
  const url = new URL(graphqlUrl);
  const response = await sendGraphQLQuery(url.href, query);

  // Verify the response data
  const { data, errors } = response;
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();

  const { count } = data;
  expect(count).toBeDefined();
});

test('UserSelectProcedureVendors Query Test', async ({ page }) => {
  const query = `
    query UserSelectProcedureVendors($input: UserListProcedureVendorInput) {
      items: userSelectProcedureVendors(input: $input) {
id
createdAt
updatedAt
name
procedureId
contractId
vendorId
estimate
fundingApproved
procedure {
  id
  name
}
contract {
  id
  name
}
vendor {
  id
  name
}





caseAccounts {
    id
    name
  }

documents {
    id
    name
  }
      }
    }
  `;

  // Send a GraphQL query to the endpoint
  const graphqlUrl = process.env.GRAPHQL_URL || '';
  const response = await sendGraphQLQuery(graphqlUrl, query);

  // Verify the response data
  const { data, errors } = response;
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();

  const { items } = data;
  expect(items).toBeDefined();
});

test('UserProcedureVendor Query Test', async ({ page }) => {
  const procedureVendorsQuery = `
    query UserProcedureVendors {
      items: userProcedureVendors {
        id
      }
    }
  `;

  // Send a GraphQL query to retrieve user accident types
  const graphqlUrl = process.env.GRAPHQL_URL || '';
  const url = new URL(graphqlUrl);
  const procedureVendorsResponse = await sendGraphQLQuery(url.href,procedureVendorsQuery);

  // Verify the response data
  const { data: { items: procedureVendors }, errors: procedureVendorsErrors } = procedureVendorsResponse;
  expect(procedureVendorsErrors).toBeUndefined();
  expect(procedureVendors).toBeDefined();
  expect(procedureVendors.length).toBeGreaterThan(0);

  // Use the first accident type ID for the subsequent user accident type query
  const procedureVendorId = procedureVendors[0].id;

  const query = `
    query UserProcedureVendor($procedureVendorId: String!) {
      item: userProcedureVendor(procedureVendorId: $procedureVendorId) {
id
createdAt
updatedAt
name
procedureId
contractId
vendorId
estimate
fundingApproved
procedure {
  id
  name
}
contract {
  id
  name
}
vendor {
  id
  name
}





caseAccounts {
    id
    name
  }

documents {
    id
    name
  }
      }
    }
  `;

  // Send a GraphQL query to retrieve the user accident type using the accident type ID
  const response = await sendGraphQLQuery(graphqlUrl, query, { procedureVendorId });

  // Verify the response data
  const { data, errors } = response;
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();

  const { item } = data;
  expect(item).toBeDefined();
});


test('UserCreateProcedureVendor Mutation Test', async ({ page, browser }) => {
  const createMutation = `
    mutation UserCreateProcedureVendor($input: UserCreateProcedureVendorInput!) {
      created: userCreateProcedureVendor(input: $input) {
        id
        name
      }
    }
  `;

  // const mockarooApiKey = process.env.MOCKAROO_APIKEY || '';

  // // Fetch a random user's first name from Mockaroo API
  // const mockarooUrl = `https://api.mockaroo.com/api/datasets/${encodeURIComponent(
  //   'Airport Name'
  // )}?key=${encodeURIComponent(mockarooApiKey)}`;

  // const mockarooFields = 'name';
  // const mockarooResponse = await fetch(`${mockarooUrl}`);
  // const mockarooData = await mockarooResponse;
  // const mockarooDataJson = await mockarooData.json();
  // const { name } = mockarooDataJson as Record<string, unknown>;
  const name = generateRandomName()

  const createInput = {
    // Provide the necessary input variables for creating an accident type
    // Modify the input variables according to your requirements
    name: name
  };

  // Send the mutation to create an accident type
  const graphqlUrl = process.env.GRAPHQL_URL || '';
  const createResponse = await sendGraphQLQuery(graphqlUrl, createMutation, { input: createInput });

  // Verify the create response data
  const { data: createData, errors: createErrors } = createResponse;
  console.log(createInput)
  expect(createErrors).toBeUndefined();
  expect(createData).toBeDefined();

  const { created } = createData;
  expect(created).toBeDefined();
  expect(created.name).toBe(createInput.name);

  const { id } = created;
  expect(id).toBeDefined();


  const updateMutation = `
    mutation UserUpdateProcedureVendor($procedureVendorId: String!, $input: UserUpdateProcedureVendorInput!) {
      updated: userUpdateProcedureVendor(procedureVendorId: $procedureVendorId, input: $input) {
        id
        name
      }
    }
  `;

  const updateInput = {
    // Provide the necessary input variables for updating an accident type
    // Modify the input variables according to your requirements
    name: generateRandomName()
  };

  // Send the mutation to update the accident type
  const updateResponse = await sendGraphQLQuery(graphqlUrl, updateMutation, { procedureVendorId: id, input: updateInput });

  // Verify the update response data
  const { data: updateData, errors: updateErrors } = updateResponse;
  expect(updateErrors).toBeUndefined();
  expect(updateData).toBeDefined();

  const { updated } = updateData;
  expect(updated).toBeDefined();
  expect(updated.name).toBe(updateInput.name);

  const deleteMutation = `
    mutation UserDeleteProcedureVendor($procedureVendorId: String!) {
      deleted: userDeleteProcedureVendor(procedureVendorId: $procedureVendorId) {
        id
        name
      }
    }
  `;

  // Send the mutation to delete the accident type
  const deleteResponse = await sendGraphQLQuery(graphqlUrl, deleteMutation, { procedureVendorId: id });

  // Verify the delete response data
  const { data: deleteData, errors: deleteErrors } = deleteResponse;
  expect(deleteErrors).toBeUndefined();
  expect(deleteData).toBeDefined();

  const { deleted } = deleteData;
  expect(deleted).toBeDefined();

  // Add more test cases for other mutations listed in the schema
});
