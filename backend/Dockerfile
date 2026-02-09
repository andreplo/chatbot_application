# Use official Python base image
FROM python:3.11-slim

# Set environment variables to reduce Python output and buffer
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip
RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -U pip setuptools wheel

RUN --mount=type=cache,target=/root/.cache/pip \
    pip install --index-url https://download.pytorch.org/whl/cpu torch==2.10.0

RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt
# torch==2.10.0
# RUN pip install -r requirements.txt

# Copy project
COPY . .

# Expose the port FastAPI will run on
EXPOSE 8000

# Command to run the FastAPI app with Uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
