// /pages/dashboard/history/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { AIOutput } from "@/utils/schema";

interface HistoryItem {
  id: string;
  templateSlug: string;
  aiResponse: string;
  createdAt: string;
  wordCount: number;
}

function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOutput, setSelectedOutput] = useState<string | null>(null); // For showing AI output in a dialog

  // Fetch history data from your backend (database)
  const fetchHistory = async () => {
    setLoading(true);
    try {
      // Fetch history without filtering by user email
      const historyData = await db.select().from(AIOutput);
      const typedHistoryData: HistoryItem[] = historyData.map((item: any) => ({
        id: item.id,
        templateSlug: item.templateSlug,
        aiResponse: item.aiResponse,
        createdAt: item.createdAt,
        wordCount: item.wordCount,
      }));
      setHistory(typedHistoryData);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Helper function to format the date in dd/MM/yyyy format
  const formatDate = (date: string) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button className="mb-4">Back to Dashboard</Button>
      </Link>
      <h1 className="text-2xl font-bold mb-5">History</h1>
      <p className="text-gray-500 mb-5">Search your previously generated AI content</p>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="font-bold">Template</TableCell>
              <TableCell className="font-bold">AI Response</TableCell>
              <TableCell className="font-bold">Date</TableCell>
              <TableCell className="font-bold">Words</TableCell>
              <TableCell className="font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : history.length > 0 ? (
              history.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.templateSlug}</TableCell>
                  <TableCell className="truncate max-w-xs">
                    {item.aiResponse.substring(0, 100)}...
                  </TableCell>
                  <TableCell>{formatDate(item.createdAt)}</TableCell>
                  <TableCell>{item.wordCount}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="secondary"
                        onClick={() => navigator.clipboard.writeText(item.aiResponse)}
                      >
                        Copy
                      </Button>
                      <Button
                        variant="default"
                        onClick={() => setSelectedOutput(item.aiResponse)}
                      >
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No history found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Dialog for displaying full AI output */}
      {selectedOutput && (
        <Dialog open={!!selectedOutput} onOpenChange={() => setSelectedOutput(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Full AI Output</DialogTitle>
            </DialogHeader>
            <div className="max-h-[500px] overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">{selectedOutput}</pre>
            </div>
            <Button className="mt-4" onClick={() => setSelectedOutput(null)}>
              Close
            </Button>
            <Button className="mt-4" onClick={() => navigator.clipboard.writeText(selectedOutput || "")}>
              Copy
            </Button >
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default HistoryPage;
