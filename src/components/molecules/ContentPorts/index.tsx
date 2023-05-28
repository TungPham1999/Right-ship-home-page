import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataPorts } from '../../../mockData/vesselsData';
import Table from '../../atoms/Table';
import './ContentPorts.scss';

const ContentPorts = () => {
  const navigate = useNavigate();

  const dataHeaderPorts = useMemo(() => dataPorts[0], []);
  const dataBodyPorts = useMemo(() => dataPorts.slice(1), []);
  const navigateToPort = (index: number) => {
    navigate(`/ports/${index + 1}`);
  };
  return (
    <>
      <h3>Ports </h3>

      <Table
        dataBody={dataBodyPorts}
        dataHeader={dataHeaderPorts}
        onClickRows={(index) => navigateToPort(index)}
      />
    </>
  );
};
export default ContentPorts;
