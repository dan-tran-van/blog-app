import { api } from "@/sdk";
import { sort, status } from "@/utils/blog.util";
import {
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

export default function BlogListAdmin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get("sort");
  const statusParam = searchParams.get("status");

  const {
    data: blogs,
    mutate,
    isLoading,
    error,
  } = useSWR(
    ["/api/admin/blogs", sortParam, statusParam],
    api.blog.getBlogsByAdmin,
  );

  return (
    <>
      <div className="md:col-span-7 lg:col-span-8">
        <div className="flex flex-row p-2">
          <Select
            labelPlacement="outside-left"
            label="Status"
            placeholder="Select a status"
            className="items-center"
            onChange={(e) => {
              searchParams.set("status", e.target.value);
              setSearchParams(searchParams);
              mutate();
            }}
          >
            {status.map((stat) => (
              <SelectItem key={stat.key}>{stat.label}</SelectItem>
            ))}
          </Select>
          <Select
            labelPlacement="outside-left"
            label="Sort"
            placeholder="By"
            className="items-center"
            onChange={(e) => {
              searchParams.set("sort", e.target.value);
              setSearchParams(searchParams);
              mutate();
            }}
          >
            {sort.map((sortItem) => (
              <SelectItem key={sortItem.key}>{sortItem.label}</SelectItem>
            ))}
          </Select>
        </div>
        <Table selectionMode="multiple" isStriped removeWrapper>
          <TableHeader>
            <TableColumn>TITLE</TableColumn>
          </TableHeader>
          {isLoading ? (
            <TableBody loadingContent={"Loading..."}>{[]}</TableBody>
          ) : error ? (
            <div>Error</div>
          ) : (
            <TableBody items={blogs}>
              {(item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
}
