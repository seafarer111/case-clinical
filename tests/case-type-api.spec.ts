
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import {  } from 'graphql-tag';
import { generateRandomName, sendGraphQLQuery } from './graphqlUtils';

dotenv.config();

test('UserCaseTypes Query Test', async ({ page }) => {
  const query = `
    query UserCaseTypes($input: UserListCaseTypeInput) {
      items: userCaseTypes(input: $input) {
id
createdAt
updatedAt
name
orderIndex
dateCreated
removed
migSource
entity
temp






legalCases {
    id
    name
  }
      }
      count: userCountCaseTypes(input: $input) {
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

test('UserCountCaseTypes Query Test', async ({ page }) => {
  const query = `
    query UserCountCaseTypes($input: UserListCaseTypeInput) {
      count: userCountCaseTypes(input: $input) {
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

test('UserSelectCaseTypes Query Test', async ({ page }) => {
  const query = `
    query UserSelectCaseTypes($input: UserListCaseTypeInput) {
      items: userSelectCaseTypes(input: $input) {
id
createdAt
updatedAt
name
orderIndex
dateCreated
removed
migSource
entity
temp






legalCases {
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

test('UserCaseType Query Test', async ({ page }) => {
  const caseTypesQuery = `
    query UserCaseTypes {
      items: userCaseTypes {
        id
      }
    }
  `;

  // Send a GraphQL query to retrieve user accident types
  const graphqlUrl = process.env.GRAPHQL_URL || '';
  const url = new URL(graphqlUrl);
  const caseTypesResponse = await sendGraphQLQuery(url.href,caseTypesQuery);

  // Verify the response data
  const { data: { items: caseTypes }, errors: caseTypesErrors } = caseTypesResponse;
  expect(caseTypesErrors).toBeUndefined();
  expect(caseTypes).toBeDefined();
  expect(caseTypes.length).toBeGreaterThan(0);

  // Use the first accident type ID for the subsequent user accident type query
  const caseTypeId = caseTypes[0].id;

  const query = `
    query UserCaseType($caseTypeId: String!) {
      item: userCaseType(caseTypeId: $caseTypeId) {
id
createdAt
updatedAt
name
orderIndex
dateCreated
removed
migSource
entity
temp






legalCases {
    id
    name
  }
      }
    }
  `;

  // Send a GraphQL query to retrieve the user accident type using the accident type ID
  const response = await sendGraphQLQuery(graphqlUrl, query, { caseTypeId });

  // Verify the response data
  const { data, errors } = response;
  expect(errors).toBeUndefined();
  expect(data).toBeDefined();

  const { item } = data;
  expect(item).toBeDefined();
});


test('UserCreateCaseType Mutation Test', async ({ page, browser }) => {
  const createMutation = `
    mutation UserCreateCaseType($input: UserCreateCaseTypeInput!) {
      created: userCreateCaseType(input: $input) {
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
    mutation UserUpdateCaseType($caseTypeId: String!, $input: UserUpdateCaseTypeInput!) {
      updated: userUpdateCaseType(caseTypeId: $caseTypeId, input: $input) {
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
  const updateResponse = await sendGraphQLQuery(graphqlUrl, updateMutation, { caseTypeId: id, input: updateInput });

  // Verify the update response data
  const { data: updateData, errors: updateErrors } = updateResponse;
  expect(updateErrors).toBeUndefined();
  expect(updateData).toBeDefined();

  const { updated } = updateData;
  expect(updated).toBeDefined();
  expect(updated.name).toBe(updateInput.name);

  const deleteMutation = `
    mutation UserDeleteCaseType($caseTypeId: String!) {
      deleted: userDeleteCaseType(caseTypeId: $caseTypeId) {
        id
        name
      }
    }
  `;

  // Send the mutation to delete the accident type
  const deleteResponse = await sendGraphQLQuery(graphqlUrl, deleteMutation, { caseTypeId: id });

  // Verify the delete response data
  const { data: deleteData, errors: deleteErrors } = deleteResponse;
  expect(deleteErrors).toBeUndefined();
  expect(deleteData).toBeDefined();

  const { deleted } = deleteData;
  expect(deleted).toBeDefined();

  // Add more test cases for other mutations listed in the schema
});
