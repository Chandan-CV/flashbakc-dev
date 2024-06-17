import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import AdminLayout from "../../../components/AdminLayout";
import { getBlogs } from "../../../services/Blogs";

function AdminBlogs() {
  const [blogsData, setBlogsData] = useState();
  const fetchData = async () => {
    try {
      const { data, error } = await getBlogs();

      if (error) {
        throw new Error("Error while fetching Testimonial");
      }

      setBlogsData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (blogsData) {
    console.log(blogsData, ":::");
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-full">
          <Card>
            <div className="ml-auto">
              <a href="/admin/testimonials/create">
                <Button>Create</Button>
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>Title</TableHeadCell>
                  <TableHeadCell>Tags</TableHeadCell>
                  <TableHeadCell>Reading Time</TableHeadCell>
                  <TableHeadCell>State</TableHeadCell>
                  <TableHeadCell>Image</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {blogsData?.map((data) => (
                    <TableRow
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={data?.id}
                    >
                      <TableCell>{data?.id}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.title}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.tags}
                      </TableCell>
                      <TableCell> {data?.readingTime}</TableCell>
                      <TableCell> {data?.state}</TableCell>
                      <TableCell>
                        <img src={data?.image} width={20} height={20} />
                      </TableCell>
                      <TableCell>
                        <a
                          href={`/admin/testimonials/edit/${data?.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default AdminBlogs;
