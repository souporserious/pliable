import React, { Component, createElement } from 'react'
import ReactDOM, { render } from 'react-dom'
import { css } from 'glamor'
import createStyledElement from 'create-styled-element'
import Table from '../src/index'
const { Div, Select } = createStyledElement

css.global('body', {
  fontFamily: 'Helvetica',
  margin: 60,
})

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'Apeartions',
    dataIndex: '',
    key: 'opeartions',
    render: () => <a href="#">Delete</a>,
  },
]

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
]

const styles = {
  table: {
    border: '1px solid #ccc',
    borderRadius: 3,
    overflow: 'auto',
  },
  head: {
    borderBottom: '1px solid #ccc',
  },
  header: {
    textAlign: 'left',
    margin: '16px 8px',
  },
  row: {
    '&:hover': { backgroundColor: '#f1f1f1' },
  },
  data: {
    padding: '16px 8px',
  },
}

const TableComponent = () => (
  <Table css={styles.table}>
    <Table.Head css={styles.head}>
      {columns.map(({ title, key, width }) => (
        <Table.Header key={key} width={width} css={styles.header}>
          {title}
        </Table.Header>
      ))}
    </Table.Head>
    <Table.Body>
      {data.map(row => (
        <Table.Row key={row.name} css={styles.row}>
          {Object.keys(row).map(key => (
            <Table.Data key={key} css={styles.data}>
              {row[key]}
            </Table.Data>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

render(<TableComponent />, document.getElementById('app'))
