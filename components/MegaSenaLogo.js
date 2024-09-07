import Image from 'next/image';

const MegaSenaLogo = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Image src="/mega-sena.png" alt="Mega Sena Logo" width={300} height={150} />
    </div>
  );
};

export default MegaSenaLogo;