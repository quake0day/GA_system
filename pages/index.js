// pages/index.js

import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/applications/');
    const data = await response.json();
    setApplications(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/applications/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        student_id: studentId,
        email,
      }),
    });

    if (response.ok) {
      setName('');
      setStudentId('');
      setEmail('');
      fetchData();
    }
  };

  return (
      <div className={styles.main}> {/* 添加这个 */}

      <h1>所有申请</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text"
          placeholder="学号"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">提交申请</button>
      </form>
        <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>学号</th>
            <th>邮箱</th>
            <th>简历</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.name}</td>
              <td>{application.student_id}</td>
              <td>{application.email}</td>
              <td>
                {application.resume_url && (
                  <a href={`http://127.0.0.1:8000${application.resume_url}`} target="_blank" rel="noopener noreferrer">
                    查看简历
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;

