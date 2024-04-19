import { useState } from 'react';

const ParrainagePeriod = () => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [validDates, setValidDates] = useState(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const saveDates = () => {
    // Vérifier la cohérence des dates et heures
    const isValid = validateDates(startDate, startTime, endDate, endTime);
    if (isValid) {
      setValidDates(true);
      // Enregistrer les dates dans la base de données ou un autre endroit de stockage
      console.log('Dates enregistrées:', startDate, startTime, endDate, endTime);
    } else {
      setValidDates(false);
      alert('Veuillez sélectionner des dates et heures valides.');
    }
  };

  const validateDates = (start, startTime, end, endTime) => {
    // Convertir les dates et heures en objets Date
    const startDateTime = new Date(`${start}T${startTime}`);
    const endDateTime = new Date(`${end}T${endTime}`);

    // Vérifier si la date de début est inférieure à la date de fin
    if (startDateTime >= endDateTime) {
      return false;
    }

    // Vérifier si la date de début est d'au moins 6 mois dans le futur
    const currentDate = new Date();
    const sixMonthsLater = new Date(currentDate.getTime() + 6 * 30 * 24 * 60 * 60 * 1000);
    if (startDateTime <= sixMonthsLater) {
      return false;
    }

    return true;
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Gestion de la période de parrainage</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Date de début :</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-2">Heure de début :</label>
          <input type="time" value={startTime} onChange={handleStartTimeChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-2">Date de fin :</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-2">Heure de fin :</label>
          <input type="time" value={endTime} onChange={handleEndTimeChange} className="border p-2 w-full" />
        </div>
      </div>
      <button onClick={saveDates} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">
        Enregistrer
      </button>
      {validDates && (
        <p className="text-green-500 mt-2">Dates enregistrées avec succès !</p>
      )}
    </div>
  );
};

export default ParrainagePeriod;
