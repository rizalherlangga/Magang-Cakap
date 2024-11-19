"use client";

import {
  fetchEducationPartners,
  fetchSupportPartners,
} from "@/store/partners-list/partnersListSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PartnersList() {
  const dispatch = useDispatch();
  const { educationPartners, supportPartners, loading, error } = useSelector(
    (state) => state.partners
  );

  useEffect(() => {
    dispatch(fetchEducationPartners());
    dispatch(fetchSupportPartners());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(supportPartners.map((partner) => partner));
  return (
    <div>
      <h1 className="text-2xl">Mitra Pendidikan</h1>
      <ul>
        {educationPartners.map((partner) => (
          <li key={partner.partnerId}>{partner.partnerName}</li>
        ))}
      </ul>

      <div>
        <h1 className="text-2xl">Mitra Pendukung</h1>

        <ul>
          {supportPartners.map((partner) => (
            <li key={partner.partnerId}>
              <h2 className="text-xl">{partner.partnerName}</h2>
              <h2>{partner.partnerDescription}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
