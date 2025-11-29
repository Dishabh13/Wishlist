-- Create wishes table
CREATE TABLE public.wishes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item_name TEXT NOT NULL,
  reason TEXT NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_done BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wishes ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no authentication required)
CREATE POLICY "Allow public read access"
ON public.wishes
FOR SELECT
USING (true);

CREATE POLICY "Allow public insert access"
ON public.wishes
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update access"
ON public.wishes
FOR UPDATE
USING (true);

CREATE POLICY "Allow public delete access"
ON public.wishes
FOR DELETE
USING (true);

-- Create index for faster queries
CREATE INDEX idx_wishes_created_at ON public.wishes(created_at DESC);
CREATE INDEX idx_wishes_is_done ON public.wishes(is_done);