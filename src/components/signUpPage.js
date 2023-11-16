import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './post';
import './signUpPage.css'; 

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');
  const [subaddress, setSubaddress] = useState('');
  const [showAddress, setShowAddress] = useState(false);

  const handleAddressButtonClick = () => {
    setShowAddress((prevShowAddress) => !prevShowAddress);
  };
   // Post 컴포넌트에서 선택한 주소를 처리
  const handlePostComplete = (data) => {
    setAddress(data.address);
    setShowAddress(false); // Post 컴포넌트를 숨김
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
    } else {
      console.log('가입 정보:', { username, email, password, address, subaddress });
    }
  };

  return (
    <div className='container'>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>주소</label>
          <input 
            className='address'
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onClick={handleAddressButtonClick}
          />
          <div>
          <label>상세주소</label>
          <input 
          className='input-subaddress' 
            type='text'
            value={subaddress}
            onChange={(e) => setSubaddress(e.target.value)}
          />
          </div>
   
          {showAddress && (
            <Post setcompany={{ address: address }} onComplete={handlePostComplete} subaddress={subaddress} />
          )}
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit'>가입하기</button>
        <Link to='/login'>이미 계정이 있으신가요? 로그인</Link>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
