"use client";

import { useState } from "react";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import Section from "@/components/Section";
import DisplayText from "@/components/DisplayText";

const PersonaResearch = () => {
  const [roleTitle, setRoleTitle] = useState("");
  const [linkedinProfiles, setLinkedinProfiles] = useState("");
  const [industryContext, setIndustryContext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [persona, setPersona] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");
    setPersona(null);

    try {
      const profilesArray = linkedinProfiles.split("\n").filter((url) => url.trim() !== "");
      const data = { roleTitle, linkedinProfiles: profilesArray, industryContext };

      const response = await fetch("/api/persona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch persona");
      }

      const result = await response.json();
      setPersona(result.persona);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Research Parameters</h1>
      <InputField
        label="Role Title/Description"
        placeholder="e.g. Senior Product Manager at B2B SaaS companies"
        required={true}
        value={roleTitle}
        onChange={setRoleTitle}
      />
      <InputField
        label="LinkedIn Profile URLs (optional)"
        placeholder="Enter 1-3 LinkedIn URLs, one per line"
        rows={3}
        value={linkedinProfiles}
        onChange={setLinkedinProfiles}
      />
      <InputField
        label="Industry Context"
        placeholder="e.g. Enterprise Software"
        value={industryContext}
        onChange={setIndustryContext}
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <FormButton label={isLoading ? "Processing..." : "Start Research"} onClick={handleSubmit} disabled={isLoading} />
      {persona && (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Persona Details</h1>
        <DisplayText data={persona.persona} />
      </div>
      )}
    </div>
  );
};

export default PersonaResearch;
