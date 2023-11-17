import React from 'react';

const sellPage = () => {
  return (
    <div className="product-detail">
      <div className="product-image">
        {/* 상품 이미지 */}
        <img src="img/phrase.png" alt="상품 이미지" />
      </div>
      <div className="product-price">
        {/* 상품 가격 */}
        <p>$99.99</p>
      </div>
      <div className="product-description">
        {/* 상품 설명 */}
        <h2>상품 설명</h2>
        <p>상품에 대한 자세한 설명이 여기에 들어갑니다.</p>
      </div>
      <div className="other-categories">
        {/* 다른 상품 카테고리 */}
        <h2>다른 상품 카테고리</h2>
        <ul>
          <li><a href="#">다른 상품 1</a></li>
          <li><a href="#">다른 상품 2</a></li>
          {/* 다른 상품 목록 추가 */}
        </ul>
      </div>
    </div>
  );
};

export default sellPage;