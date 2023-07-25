import { useState, useEffect } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { data, error, loading };
};

const Fetch = ({
  uri,
  handleSuccess,
  onLoading = <p>loading...</p>,
  onError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) => {
  const { data, error, loading } = useFetch(uri);
  if (loading) return onLoading;
  if (error) return onError(error);
  if (data) return handleSuccess(data);
};

export default Fetch;
