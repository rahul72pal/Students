import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

// const students = [
//   {
//     id: "1234",
//     name: "Rahul Pal",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "5678",
//     name: "Anita Sharma",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "9101",
//     name: "Vikram Singh",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "1121",
//     name: "Neha Gupta",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "3141",
//     name: "Rohit Verma",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "5161",
//     name: "Priya Mehta",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "7181",
//     name: "Suresh Kumar",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "9202",
//     name: "Pooja Joshi",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "2232",
//     name: "Amit Agarwal",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "4252",
//     name: "Sneha Reddy",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "6272",
//     name: "Karan Malhotra",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "8292",
//     name: "Nisha Roy",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "9303",
//     name: "Deepak Choudhary",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "1343",
//     name: "Sonia Iyer",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "2354",
//     name: "Ravi Kapoor",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "3465",
//     name: "Meera Das",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "4576",
//     name: "Aakash Yadav",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "5687",
//     name: "Tina Bansal",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "6798",
//     name: "Vijay Patil",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "7899",
//     name: "Swati Singh",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "8900",
//     name: "Kavita Nair",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "9011",
//     name: "Nitin Sharma",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "0122",
//     name: "Ritika Saini",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "1233",
//     name: "Anil Joshi",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "2344",
//     name: "Shalini Verma",
//     class: "10th Science",
//     present: false,
//   },
//   {
//     id: "3455",
//     name: "Rajesh Rathi",
//     class: "10th Science",
//     present: true,
//   },
//   {
//     id: "4566",
//     name: "Pankaj Dubey",
//     class: "10th Science",
//     present: false,
//   },
// ];

interface Student {
  student_id: string | undefined;
  name: string;
  class_name: string | undefined;
  roll_number: number;
  present: boolean | undefined;
}

interface StudentListProps {
  students: Student[];
  title: string;
}

const StudentList: React.FC<StudentListProps> = ({ students, title }) => {
  return (

      <div className="bg-[#000814]">
        <p className="text-center sm:text-lg my-auto py-5 text-2xl font-semibold">
          {title}
        </p>
        <Table className="w-[75%] sm:w-[99%] pb-4 mx-auto overflow-x-auto m-6 sm:m-2 border-2 p-3">
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[10px]">check</TableHead> */}
              {/* Increase the width of the Name column here */}
              <TableHead className=" w-[150px] text-start text-[#FFD52A]">Name</TableHead>
              <TableHead className="text-start text-[#FFD52A]">Class</TableHead>
              <TableHead className="text-center text-[#FFD52A]">Present</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-[10px]">
            {students.map((row) => (
              <TableRow className="h-[10px] hover:bg-gray-800" key={row.student_id}>
                {/* <TableCell className="h-[10px] sm:w-[20px]">
                  <Checkbox className="sm:h-[20px] border border-white text-start sm:w-[20px]" checked={false} />
                </TableCell> */}
                {/* Increase the width of the Name cell here as well */}
                <TableCell className="w-[150px] sm:text-xs text-start">{row.name}</TableCell>
                <TableCell className="w-[150px] text-xs text-start">{row.class_name}</TableCell>
                <TableCell className="h-[10px] text-center">
                <Checkbox className={`sm:h-[20px]  bg-white border ${row.present ? "bg-yellow-400":"bg-transparent"} border-white text-start sm:w-[20px]`} checked={row.present} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default StudentList;
