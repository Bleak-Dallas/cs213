<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <style>
                body {
                position:relative;
                text-align: center;
                }
                td {
                    padding: 1px;
                    border-right: 1px solid black;
                    border-top: 1px solid black;
                }

                table {
                    margin: auto;
                    border: 1px solid black;
                    padding: 3px;
                    width: 100%;
                }
                #headings {
                    font-weight: bold;
                    background-color: lightgray;
                }

                h2 {
                    font-style: italic;
                }

                #troop {
                    font-style: italic;
                }

                select {
                    width: 70%;
                }
            </style>
            <head>
                <title>Boy Scouts of America</title>
            </head>
            <body>
                <h2>The Boy Scouts of America</h2>
                <xsl:for-each select="bsa/council">
                    <div>
                        <xsl:value-of select="@name"/> Council
                    </div>
                    <br></br>
                    <xsl:for-each select="troop">
                        <table>
                            <th>
                                <div id="troop">Troop:
                                    <xsl:value-of select="@troop-number"/>
                                    <xsl:value-of select="@troopName"/>
                                </div>
                            </th>
                            <tr id="headings">
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Address</td>
                                <td>City</td>
                                <td>State</td>
                                <td>Phone</td>
                                <td>Rank</td>
                                <td>Merit Badges</td>
                            </tr>
                            <xsl:for-each select="scout">
                                <tr>
                                    <td>
                                        <xsl:value-of select="firstName"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="lastName"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="address/street"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="address/city"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="address/state"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="phone"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="rank"/>
                                        <xsl:value-of select="@date-earned"/>
                                    </td>
                                    <td>
                                        <select>
                                            <xsl:for-each select="meritBadge">
                                                <xsl:sort select="@date-earned" order="descending"/>
                                                <option>
                                                    <xsl:value-of select="current()"/> (<xsl:value-of select="@date-earned"/>)
                                                </option>
                                            </xsl:for-each>
                                        </select>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </xsl:for-each>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
