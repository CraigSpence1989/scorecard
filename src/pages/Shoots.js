/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
  Statistic
} from "antd";

import React from "react";

import { ToTopOutlined, PlusOutlined, ExclamationOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";

import { format } from 'date-fns'

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "60%",
  },

  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "20%",
    render: (_, record) => (
      format(record.date, 'dd/mm/yyyy')
    ),
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Actions",
    key: "action",
    dataIndex: "action",
  },
];


  const angle = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      key={0}
    >
      <g id="bank" transform="translate(0.75 0.75)">
        <path
          id="Shape"
          transform="translate(0.707 9.543)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        ></path>
        <path
          id="Path"
          d="M10.25,0,20.5,9.19H0Z"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        ></path>
        <path
          id="Path-2"
          data-name="Path"
          d="M0,.707H20.5"
          transform="translate(0 19.793)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>,
  ];

export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/shoots').then((response) => {
      setData(response.data);
    });
  }, []);

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>

          <Col xs="24" xl={24}>
              <Card bordered={false}
                className="criclebox tablespace mb-24"
                title="Shoots"
                extra={
                  <>
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value="a">All</Radio.Button>
                      <Radio.Button value="b">Pending</Radio.Button>
                      <Radio.Button value="c">Active</Radio.Button>
                      <Radio.Button value="d">Complete</Radio.Button>
                    </Radio.Group>
                  </>
                }
              >
                <div className="table-responsive">
                  <Table columns={columns} dataSource={data} pagination={false}  className="ant-border-space" />
                </div>
              </Card>
            </Col>
        </Row>
      </div>
    </>
  );
}