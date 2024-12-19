import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Pagination = ({ links, onPageChange }) => {
  const navigate = useNavigate();

  if (!links || links.length === 0) return null;

  const renderPageNumbers = () => {
    const pageItems = [];

    for (let i = 1; i < links.length - 1; i++) { // Bỏ qua Previous và Next
      const page = links[i];
      pageItems.push(
        <div
          key={i}
          className={`page-list__item ${page.active ? 'active' : ''}`}
          onClick={() => page.url && onPageChange(page.label)} // Sử dụng onPageChange thay vì navigate trực tiếp
          style={{
            cursor: page.url ? 'pointer' : 'default',
            fontWeight: page.active ? 'bold' : 'normal',
          }}
        >
          {page.label}
        </div>
      );
    }

    return pageItems;
  };

  return (
    <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      {/* Nút Previous */}
      <div
        className="page-list__item"
        onClick={() => links[0].url && onPageChange(links[0].label)} // Sử dụng onPageChange thay vì navigate
        style={{ cursor: links[0].url ? 'pointer' : 'not-allowed' }}
      >
        <ChevronLeftIcon style={{ color: links[0].url ? '#6e6e6e' : '#ccc' }} />
      </div>

      {/* Các nút số trang */}
      {renderPageNumbers()}

      {/* Nút Next */}
      <div
        className="page-list__item"
        onClick={() => links[links.length - 1].url && onPageChange(links[links.length - 1].label)} // Sử dụng onPageChange thay vì navigate
        style={{ cursor: links[links.length - 1].url ? 'pointer' : 'not-allowed' }}
      >
        <ChevronRightIcon style={{ color: links[links.length - 1].url ? '#6e6e6e' : '#ccc' }} />
      </div>
    </div>
  );
};

export default Pagination;
