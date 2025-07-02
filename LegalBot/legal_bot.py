import os
import streamlit as st
from dotenv import load_dotenv

from agno.agent import Agent
from agno.team.team import Team
from agno.models.google import Gemini

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    st.error("❌ GEMINI_API_KEY is missing in your .env file")
    st.stop()

legal_explainer = Agent(
    name="Law Explainer Agent",
    model=Gemini(id="gemini-1.5-flash", api_key=api_key),
    description="""
        You are a legal expert who explains laws, legal terms, acts, and procedures in simple, easy-to-understand language.

        ## Instructions:
        - Break down complex legal jargon.
        - Use real-world examples where possible.
        - Respond to queries like "What is IPC 420?" or "Explain bail process in India".

        ## Output Style:
        - Simple language
        - Bullet points or short paragraphs
        - No legalese or unnecessary complexity
    """,
    markdown=True,
)

legal_advisor = Agent(
    name="Action Advisor Agent",
    model=Gemini(id="gemini-1.5-flash", api_key=api_key),
    description="""
        You are an assistant who gives actionable legal advice (not a lawyer) based on user problems.

        ## Instructions:
        - Suggest steps like reporting to police, filing an FIR, contacting a lawyer, consumer forum, etc.
        - Be precise and avoid giving false hope or guaranteed outcomes.
        - Examples: "I lost my passport", "I'm being harassed by neighbors", "Fraud on job portal"

        ## Output Style:
        - Numbered steps or checklist
        - Mention applicable authorities (e.g., police, cybercrime)
        - Avoid giving actual legal representation
    """,
    markdown=True,
)

# Define Law Finder Agent
law_finder = Agent(
    name="Law Finder Agent",
    model=Gemini(id="gemini-1.5-flash", api_key=api_key),
    description="""
        You are a law identification assistant. Based on a user's legal situation, suggest the relevant laws, sections (IPC, CrPC, IT Act, etc.), or government rules.

        ## Instructions:
        - Suggest laws that might apply.
        - Mention section numbers, names, and what they deal with.
        - Provide a one-line summary of what the law states.

        ## Output Style:
        - Bullet format or short structured notes.
        - Mention Indian Penal Code (IPC), CrPC, IT Act, Consumer Protection Act, etc.
    """,
    markdown=True,
)

legal_team = Team(
    name="Legal Assistant Team",
    model=Gemini(id="gemini-1.5-flash", api_key=api_key),
    mode="route",
    members=[legal_explainer, legal_advisor, law_finder],
    description="Routes legal queries to the right expert based on the type of question.",
    instructions=[
        "Route to Law Explainer Agent if the query contains 'explain', 'meaning', 'definition', or 'what is'",
        "Route to Action Advisor Agent if the query is a complaint, contains 'what should I do', 'next step', or describes a problem",
        "Route to Law Finder Agent if the query asks 'which law', 'which section', 'under what law', 'related law'",
    ],
    markdown=True,
)

st.set_page_config(page_title="Legal Assistant", page_icon="⚖️", layout="centered")
st.title("⚖️ AI Legal Assistant")
st.markdown("Ask any legal question. Our AI team will guide you with clear explanations, possible actions, or laws involved.")

with st.form("legal_form"):
    user_query = st.text_input("Enter your legal question:")
    submitted = st.form_submit_button("Get Legal Help")

legal_keywords = [
    "IPC", "CrPC", "bail", "FIR", "law", "legal", "court", "section", "act", "rights",
    "arrest", "cybercrime", "police", "harassment", "passport", "complaint", "consumer",
    "advocate", "petition", "justice", "judge", "trial", "contract", "fraud", "cheating",
    "divorce", "property", "dowry", "tenant", "agreement", "evidence"
]

if submitted and user_query:
    if any(keyword.lower() in user_query.lower() for keyword in legal_keywords):
        with st.spinner("🔍 Analyzing your query..."):
            response = legal_team.run(user_query)
        st.markdown("### 🧾 Response:")
        st.markdown(response.content)
    else:
        st.warning("⚠️ Please ask a **legal** question. Your input doesn't appear to be related to law.")
elif submitted and not user_query:
    st.warning("⚠️ Please enter a legal question before submitting.")
