# Prototype demo (micro frontend architecture)

This is a hello world setup for rapidly building prototypes that despite being a prototype can be quickly adapted and deployed to GCloud and integrated with a CI system of your choice.

## project packages

### frontend-proxy

The frontend proxy application that implements the business logic for the microfrontend architecture.

### frontend-shell

The frontend shell layout application.

### design-system

The design system that consists of design artifacts to build consistent applications.

### team-checkout

Micro-App for the promotion domain.

### team-product

Micro-App for the product domain.

### frontend-api

A middle layer API based upon GraphQL that bridges the content from the various systems that comprise the backend. Possibly micro-services and/or legacy REST APIs.

### mock-server-api

A mock REST API that serves content similar to the usecase that the prototype is for.

## deployment procedure

...tbd
