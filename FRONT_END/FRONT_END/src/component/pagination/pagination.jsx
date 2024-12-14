
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Pagination = ({ links }) => {
  if (!links || links.length === 0) return null;

  const renderPageNumbers = () => {
    const pageItems = [];

    for (let i = 1; i < links.length - 1; i++) { // Bỏ qua Previous và Next
      const page = links[i];
      pageItems.push(
        <div
          key={i}
          className={`page-list__item ${page.active ? 'active' : ''}`}
          onClick={() => page.url && (window.location.href = page.url)}
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
    <div className="pagination" style={{display:'flex', justifyContent:'flex-end',alignItems:"center"}}>
      {/* Nút Previous */}
      <div
        className="page-list__item"
        onClick={() => links[0].url && (window.location.href = links[0].url)}
        style={{ cursor: links[0].url ? 'pointer' : 'not-allowed' }}
      >
        <ChevronLeftIcon style={{ color: links[0].url ? '#6e6e6e' : '#ccc' }} />
      </div>

      {/* Các nút số trang */}
      {renderPageNumbers()}

      {/* Nút Next */}
      <div
        className="page-list__item"
        onClick={() => links[links.length - 1].url && (window.location.href = links[links.length - 1].url)}
        style={{ cursor: links[links.length - 1].url ? 'pointer' : 'not-allowed' }}
      >
        <ChevronRightIcon style={{ color: links[links.length - 1].url ? '#6e6e6e' : '#ccc' }} />
      </div>
    </div>
  );
};

export default Pagination;
