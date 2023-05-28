import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dataPorts, dataVessels } from '../../../../mockData/vesselsData';
import Table from '../../../atoms/Table';

const ContentPost = () => {
  const params = useParams();
  const { id } = params;
  const nameOfPort = useMemo(() => dataPorts[parseInt(id ?? '0')][0], [id]);
  const dataHeaderVessels = useMemo(() => dataVessels[0], []);
  const dataBodyVessels = useMemo(() => dataVessels.slice(1), []);
  const navigate = useNavigate();

  return (
    <>
      <div className='port_name_wrapper'>
        <span className='port_name'>
          Port Name:
          <h3>{nameOfPort}</h3>
        </span>
        <span className='back_to_port' onClick={() => navigate('/ports')}>
          Back To Port
        </span>
      </div>
      <span>Vessels: </span>
      <Table dataBody={dataBodyVessels} dataHeader={dataHeaderVessels} />
    </>
  );
};

export default ContentPost;
