import React from 'react';
import { Gift, DollarSign, Wallet, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const styles = {
    header: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      paddingLeft: "100px"
    },
    container: {
      display: 'flex',

    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    iconsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      position:"relative",
      right:"15px"
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      
    },
    iconText: {
      fontSize: '14px',
      fontWeight: '500',
    },
    avatar: {
      width: '70px',
      height: '90px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position:"relative",
      right:"100px",
            
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.avatar} onClick={()=>navigate("/home")} >
          <img src='/logo.png' height="60px" />
        </div>

        <div style={styles.iconsContainer}>
          <div style={styles.iconWrapper}>
            <Gift color="#ec4899" size={24} />
            <span style={styles.iconText}>21</span>
          </div>

          <div style={styles.iconWrapper}>
            <DollarSign color="#22c55e" size={24} />
            <span style={styles.iconText}>0.00</span>
          </div>

          <div style={styles.iconWrapper}>
            <Wallet color="#3b82f6" size={24} />
            <span style={styles.iconText}>₹1000</span>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;