import { api } from "@/sdk";
import { Blog } from "@/types/blog.type";
import { path } from "@/utils/path.util";
import {
  Button,
  Chip,
  ChipProps,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import {
  ArrowLeftRightIcon,
  CirclePlusIcon,
  DeleteIcon,
  EditIcon,
  EyeIcon,
  ListFilterIcon,
  SearchIcon,
  Settings2Icon,
} from "lucide-react";
import { Key, useCallback } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import useSWR from "swr";

const statusColorMap: Record<string, ChipProps["color"]> = {
  DRAFT: "warning",
  PUBLISHED: "success",
  ARCHIVED: "danger",
};

export default function BlogListAdmin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get("sort");
  const statusParam = searchParams.get("status");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    data: blogs,
    mutate,
    isLoading,
    error,
  } = useSWR(
    ["/api/admin/blogs", sortParam, statusParam],
    api.blog.getBlogsByAdmin,
  );

  const columns = [
    { name: "Title", uid: "title" },
    { name: "Slug", uid: "slug" },
    { name: "Status", uid: "status" },
    { name: "Actions", uid: "actions" },
  ];

  const renderCell = useCallback((blog: Blog, columnKey: Key) => {
    const cellValue = blog[columnKey as keyof Blog];

    switch (columnKey) {
      case "title":
        return <div>{cellValue}</div>;

      case "slug":
        return <div>{cellValue}</div>;

      case "status":
        return (
          <Chip
            variant="dot"
            color={statusColorMap[blog.status]}
            className="border-none bg-default-100"
            size="sm"
            radius="sm"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span
                onClick={onOpen}
                className="cursor-pointer text-lg text-danger active:opacity-50"
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center p-4">
        <div className="h-screen w-full p-6">
          <div className="mb-[18px] flex items-center justify-between">
            <div className="flex w-[226px] items-center gap-2">
              <h1 className="text-2xl font-[700] leading-[32px]">Blogs</h1>
            </div>
            <NavLink to={path.admin.addBlog()}>
              <Button
                className="rounded-medium"
                color="primary"
                endContent={
                  <CirclePlusIcon
                    fill="white"
                    size={20}
                    className="stroke-[#006fee]"
                  />
                }
              >
                Add Blog
              </Button>
            </NavLink>
          </div>
          <div className="relative flex w-full flex-col gap-4">
            <div className="flex items-center gap-4 overflow-auto px-[6px] py-[4px]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <Input
                    className="min-w-[200px]"
                    type="search"
                    endContent={<SearchIcon size={16} />}
                    placeholder="Search"
                  ></Input>
                  <div>
                    <Button
                      className="z-10 h-8 rounded-small bg-default-100 px-3 text-tiny text-default-800"
                      startContent={
                        <Settings2Icon size={16} className="text-default-400" />
                      }
                    >
                      Filter
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="z-10 h-8 rounded-small bg-default-100 px-3 text-tiny text-default-800"
                      startContent={
                        <ListFilterIcon
                          size={16}
                          className="text-default-400"
                        />
                      }
                    >
                      Sort
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="z-10 h-8 rounded-small bg-default-100 px-3 text-tiny text-default-800"
                      startContent={
                        <ArrowLeftRightIcon
                          size={16}
                          className="text-default-400"
                        />
                      }
                    >
                      Columns
                    </Button>
                  </div>
                </div>
                <Divider orientation="vertical" className="h-5" />
                <div className="whitespace-nowrap text-sm text-default-800"></div>
              </div>
            </div>
            <div className="relative z-0 flex w-full flex-col justify-between gap-4 overflow-auto rounded-large bg-content1 p-4 shadow-small">
              <Table
                selectionMode="multiple"
                removeWrapper
                className="h-auto w-full min-w-full table-auto"
                onRowAction={() => {}}
              >
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn
                      key={column.uid}
                      align={column.uid === "actions" ? "center" : "start"}
                    >
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>

                {isLoading ? (
                  <TableBody isLoading={true} loadingContent={"Loading..."}>
                    {[]}
                  </TableBody>
                ) : error ? (
                  <div>Error</div>
                ) : (
                  <TableBody items={blogs}>
                    {(item) => (
                      <TableRow key={item.id}>
                        {(columnKey) => (
                          <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                )}
              </Table>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 px-2 py-2 sm:flex-row">
              <Pagination showControls />
              <div className="flex items-center justify-end gap-6"></div>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Delete blog</ModalHeader>
                <ModalBody>
                  <p>Are you sure deleting this blog?</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary">Confirm</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
