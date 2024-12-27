import SingleBook from "@/components/SingleBook";

interface ListBookProps {
  books: Book[];
}

const ListBook = ({ books }: ListBookProps) => {
  console.log(books);
  return (
    <div>
      <SingleBook />
    </div>
  );
};

export default ListBook;
