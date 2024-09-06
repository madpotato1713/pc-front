import { useState, useEffect } from 'react';
// import { getMemberList } from '@/service/ExamplesAPI';
// import { ButtonExample } from '@/components/atoms';
import styles from './ExamplePaging.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// const cx = classNames.bind(styles);
interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const ExamplePaging = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageGroup, setPageGroup] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${page}`
      );
      const result: ApiResponse = await response.json();
      setData(result);
      setTotalPages(Math.ceil(result.count / 10)); // assuming each page has 10 results
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleNextGroup = () => {
    if ((pageGroup + 1) * 5 < totalPages) {
      setPageGroup(pageGroup + 1);
      setPage(pageGroup * 5 + 6); // 다음 그룹의 첫 페이지로 이동
    }
  };

  const handlePreviousGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(pageGroup - 1);
      setPage((pageGroup - 1) * 5 + 5); // 이전 그룹의 마지막 페이지로 이동
    }
  };

  const handleFirstPage = () => {
    setPage(1);
    setPageGroup(0);
  };

  const handleLastPage = () => {
    setPage(totalPages);
    setPageGroup(Math.floor((totalPages - 1) / 5));
  };

  const renderPageNumbers = () => {
    const startPage = pageGroup * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={cx({ active: i === page })} // cx 함수 사용
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={cx('app')}>
      <div className={cx('header')}>
        <h1>Star Wars Characters</h1>
        <p>Total Count: {data?.count}</p>
      </div>
      {loading ? (
        <div className={cx('loader')}></div>
      ) : (
        <>
          <div className={cx('character-list')}>
            {data?.results.map((person) => (
              <div
                key={person.url}
                className={cx('character-card')}>
                <h2>{person.name}</h2>
                <p>
                  <strong>Height:</strong> {person.height}
                </p>
                <p>
                  <strong>Mass:</strong> {person.mass}
                </p>
                <p>
                  <strong>Hair Color:</strong> {person.hair_color}
                </p>
                <p>
                  <strong>Skin Color:</strong> {person.skin_color}
                </p>
                <p>
                  <strong>Eye Color:</strong> {person.eye_color}
                </p>
                <p>
                  <strong>Birth Year:</strong> {person.birth_year}
                </p>
                <p>
                  <strong>Gender:</strong> {person.gender}
                </p>
              </div>
            ))}
          </div>
          <div className={cx('pagination')}>
            <button
              onClick={handleFirstPage}
              //   disabled={page === 1}
            >
              &lt;&lt;
            </button>
            <button
              onClick={handlePreviousGroup}
              //   disabled={pageGroup === 0}
            >
              &lt;
            </button>
            {renderPageNumbers()}
            <button
              onClick={handleNextGroup}
              //   disabled={(pageGroup + 1) * 5 >= totalPages}
            >
              &gt;
            </button>
            <button
              onClick={handleLastPage}
              //   disabled={page === totalPages}
            >
              &gt;&gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExamplePaging;
