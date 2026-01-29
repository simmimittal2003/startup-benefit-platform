const API = "http://localhost:5000/api";

// DEALS
export async function fetchDeals() {
  const res = await fetch(`${API}/deals`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch deals");
  return res.json();
}

export async function fetchDealById(id: string) {
  const res = await fetch(`${API}/deals/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Deal not found");
  return res.json();
}

// AUTH
export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

export async function registerUser(email: string, password: string) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Registration failed");
}

// CLAIMS
export async function claimDeal(id: string, token: string) {
  const res = await fetch(`${API}/claims/${id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

export async function fetchMyClaims(token: string) {
  const res = await fetch(`${API}/claims/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Failed to load dashboard");
  return res.json();
}
