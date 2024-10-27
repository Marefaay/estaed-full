import React, { useState, useEffect } from "react";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";
import response from "../utils/demo/usersData";

const AdminsTable = ({ resultsPerPage, filter }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // const [data, setData] = useState([]);
  const url = "http://localhost:5000/admins";
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  // pagination setup
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, resultsPerPage, filter]);

  return (
    <div>
      {/* Table */}
      <TableContainer className="mb-8">
        <Table>
          <TableHeader style={{backgroundColor:"var(--dash-nav) !important"}}>
            <tr className="text-center">
              <TableCell style={{color:"var(--li-color)"}}>الاسم الاول</TableCell>
              <TableCell style={{color:"var(--li-color)"}}>الاسم الأخير</TableCell>
              <TableCell style={{color:"var(--li-color)"}}>الدور</TableCell>
              <TableCell style={{color:"var(--li-color)"}}>الايميل</TableCell>
              <TableCell  style={{color:"var(--li-color)"}}>وقت الانضمام</TableCell>
            </tr>
          </TableHeader>
          <TableBody style={{backgroundColor:"var(--dash-nav) !important"}}>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="d-flex justify-content-center text-sm">
                    {/* <Avatar
                      className="hidden mr-3 md:block"
                      src={user.avatar}
                      alt="User image"
                    /> */}
                    <div>
                      <p className="font-semibold" style={{color:"var(--text-color)"}}>{user.firstName}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm" style={{color:"var(--text-color)"}}>{user.lastName}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm" style={{color:"var(--text-color)"}}>{user.role}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm" style={{color:"var(--text-color)"}}>{user.mail}</span>
                </TableCell>

                <TableCell>
                  <span className="text-sm" style={{color:"var(--text-color)"}}>
                    {new Date(user.joinOn).toLocaleDateString()}
                  </span>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter> */}
      </TableContainer>
    </div>
  );
};

export default AdminsTable;
