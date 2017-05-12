## Pliable 🥖

[![npm version](https://badge.fury.io/js/pliable.svg)](https://badge.fury.io/js/pliable)
[![Dependency Status](https://david-dm.org/souporserious/pliable.svg)](https://david-dm.org/souporserious/pliable)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A no frills, all smiles, easily styleable Table in React. Yes, that's a baguette up there. And no, it doesn't make any sense.

near-future goals:

- possible JS header sorting

- tests

- docs/demo site

## Install

`yarn add pliable`

`npm install pliable --save`

## Example

```js
import Table from 'pliable'

const { Head, Header, Body, Row, Data } = Table

const TableComponent = () => (
  <Table css={{ border: '1px solid #ccc', borderRadius: 3 }}>
    <Head css={{ padding: 16, borderBottom: '1px solid #ccc' }}>
      <Header>Name</Header>
      <Header>Age</Header>
      <Header>Favorite Pastime</Header>
    </Head>
    <Body>
      <Row css={{ padding: 16 }}>
        <Data>Richard Hendricks</Data>
        <Data>35</Data>
        <Data>👾</Data>
      </Row>
      <Row css={{ padding: 16 }}>
        <Data>Erlich Bachman</Data>
        <Data>35</Data>
        <Data>🌳</Data>
      </Row>
    </Body>
  </Table>
)
```

## Running Locally

clone repo

`git clone git@github.com:souporserious/pliable.git`

move into folder

`cd ~/pliable`

install dependencies

`yarn`

run dev mode

`yarn dev`

open your browser and visit: `http://localhost:8080/`
