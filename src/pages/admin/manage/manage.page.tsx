import { path } from "@/utils/path.util";
import { Button } from "@nextui-org/react";
import { Edit2Icon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminManage() {
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>Users</th>
            <td>
              <Link to={path.admin.addUser()}>
                <Button startContent={<PlusIcon />}>Add</Button>
              </Link>
            </td>
            <td>
              <Link to={path.admin.users()}>
                <Button startContent={<Edit2Icon />}>Change</Button>
              </Link>
            </td>
          </tr>
          <tr>
            <th>Blogs</th>
            <td>
              <Link to={path.admin.addBlog()}>
                <Button startContent={<PlusIcon />}>Add</Button>
              </Link>
            </td>
            <td>
              <Link to={path.admin.blogs()}>
                <Button startContent={<Edit2Icon />}>Change</Button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
