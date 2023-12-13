import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const ShopPagination = () => {
  return (
    <div className="w-full flex justify-center items-center pt-6 pb-3">
      <Pagination aria-label="page navigation" size="lg">
        <PaginationItem>
          <PaginationLink first href="#">
            First
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink first href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink first href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink first href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink first href="#">
            Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};
export default ShopPagination;
